import { diskStorage } from "multer"

export const getStorageOption = (destination: string) => {
    return diskStorage({
        destination: process.cwd() + `/public/imgs/${destination}`,
        filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
}