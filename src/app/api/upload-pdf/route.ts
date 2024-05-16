// import type { NextApiRequest, NextApiResponse } from "next";
// import { PDFDocument } from "pdf-lib";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const parsePDF = async (file: Buffer) => {
//   const pdfDoc = await PDFDocument.load(file);
//   const pages = pdfDoc.getPages();
//   const textPromises = pages.map(async (page) => await page.getTextContent());
//   const textContents = await Promise.all(textPromises);
//   return textContents
//     .map((content) => content.items.map((item: any) => item.str).join(" "))
//     .join("\n");
// };



// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   // Apply CORS middleware

//   console.log("this is the method:", req.method);

//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Method not allowed" });
//     return;
//   }

//   try {
//     const file = await new Promise<Buffer>((resolve, reject) => {
//       const data: Uint8Array[] = [];
//       req.on("data", (chunk) => data.push(chunk));
//       req.on("end", () => resolve(Buffer.concat(data)));
//       req.on("error", (err) => reject(err));
//     });
//     const text = await parsePDF(file);
//     console.log("This is the text:", text);
    
//     res.status(200).json({ text });
//   } catch (error) {
//     res.status(500).json({ message: "Error parsing PDF", error });
//   }
// }
