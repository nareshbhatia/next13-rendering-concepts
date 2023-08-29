import { moviesRouter } from './moviesRouter';
import { planMembersRouter } from './planMembersRouter';
import { rootRouter } from './rootRouter';
import { top10MoviesRouter } from './top10MoviesRouter';
import { Router } from 'express';

export const router = Router();
router.use('/', rootRouter);
router.use('/movies', moviesRouter);
router.use('/plan-members', planMembersRouter);
router.use('/top-10-movies', top10MoviesRouter);
