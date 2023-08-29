import planMembers from './data/plan-members.json';
import { Router } from 'express';

export const planMembersRouter = Router();

planMembersRouter.get('/', (_, res) => {
  res.send(planMembers);
});
