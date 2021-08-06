import { Request, Response } from "express";
import moment = require("moment");

import { User } from "../entity/User";

module.exports = {
  async store(req: Request, res: Response) {
    const { bodyName, email, CPF, contact, knowledge } = req.body;

    if (!(bodyName || email || CPF || knowledge)) {
      return res.status(400).json({
        error: 'Preencha todos os campos obrigatórios.'
      })
    }

    const bodyNameWithoutWhiteSpaces = bodyName.replace(/\s/g, "");

    const user = new User();
    user.name = bodyNameWithoutWhiteSpaces;
    user.email = email;
    user.CPF = CPF;
    user.contact = contact;
    user.knowledge = knowledge;
    user.validated = false;
    
    const userExists = await User.findOne({ CPF });
    
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já cadastrado.' });
    }

    if (knowledge.length > 3) {
      return res.status(400).json({
        error: 'O número máximo de conhecimentos é três (3).'
      })
    }

    if (knowledge.length < 1) {
      return res.status(400).json({
        error: 'Preencha no mínimo uma (1) habilidade.'
      })
    }

    await user.save();

    return res.status(200).json({ user });
  },

  async index(req: Request, res: Response) {
    const users = await User.find({ order: { name: 'ASC' } });

    return res.status(200).json({ users });
  },

  async show(req: Request, res: Response) {
    const { _id } = req.params;

    const user = await User.findOne(_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário inexistente' });
    }

    return res.status(200).json({ user });
    
  },

  async by_cpf(req: Request, res: Response) {
    const { CPF } = req.body;

    const user = await User.findOne({ where: { CPF } });

    if (!user) {
      return res.status(200).json({ error: 'Usuário inexistente' });
    }

    return res.status(200).json({ user });
  },

  async edit(req: Request, res: Response) {
    const { validated } = req.body;
    const { _id } = req.params;

    const user = await User.findOne(_id);

    user.validated = validated;
    user.validatedAt = moment().format();
    await user.save();

    return res.status(200).json({ user });

  }
}