const fs = require("fs");
const path = require("path");
export function imageToBase64(imagePath) {
  try {
    // 读取图片文件
    const imageData = fs.readFileSync(path.resolve(__dirname, imagePath));

    // 将图片数据转换为Base64编码
    const base64Data = imageData.toString("base64");

    return base64Data;
  } catch (error) {
    console.error("图片转换失败:", error);
    return null;
  }
}
