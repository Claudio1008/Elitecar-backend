import {Request, Response, Router} from "express";

//criando um roteador
const router = Router();

//criando uma rota principal para aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({mensagem: "ola mundo"});
});

//exportando as rotas
export { router };