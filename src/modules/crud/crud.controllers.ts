import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const data = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).send({ success: true, data });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: `Ошибка сервера: ${error}` });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, imageUrl } = req.body;
    if (!name || !price || !imageUrl) {
      return res
        .status(400)
        .send({ success: false, message: "Заполните все поля" });
    }
    const newProduct = await prisma.product.create({
      data: { name, price, imageUrl },
    });
    res
      .status(201)
      .send({ success: true, message: "Продукт добавлен", data: newProduct });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: `Ошибка сервера: ${error}` });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, imageUrl } = req.body;

    const productId = Number(id);
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Продукт не найден",
      });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, price, imageUrl },
    });

    return res.status(200).json({
      success: true,
      message: "Продукт успешно обновлен",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Ошибка сервера: ${error}`,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Продукт не найден",
      });
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    return res.status(200).json({
      success: true,
      message: `Продукт с id=${id} удален`,
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Ошибка сервера: ${error}`,
    });
  }
};

const getOneProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Продукт не найден",
      });
    }

    res.status(200).send({
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Ошибка сервера: ${error}`,
    });
  }
};

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProductById,
};
