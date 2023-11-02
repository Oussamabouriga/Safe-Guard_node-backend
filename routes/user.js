import express from 'express';
import { body } from 'express-validator';
import { getAll, getOnce, putOnce, patchOnce, deleteOnce } from '../controllers/game.js';

const router = express.Router();

router
  .route('/')
  .post(
    [
      body('email')
        .isEmail()
        .custom(value => {
          // Custom email validation logic
          const emailParts = value.split('@');
          if (emailParts.length !== 2) {
            throw new Error('Invalid email format');
          }

          const [prefix, domain] = emailParts;
          const domainParts = domain.split('.');
          if (domainParts.length < 2) {
            throw new Error('Invalid email format');
          }

          // You can add more specific validation rules here if needed
          return true;
        }),
      body('password')
        .isLength({ min: 8 })
        .matches(/[\W_]/, 'g')
        .withMessage('Password must contain at least one special character')
    ],
    addOnce
  );

router
  .route('/:username')
  .get(getOnce)
  .put(putOnce)
  .patch(patchOnce)
  .get(getAll)
  .delete(deleteOnce);
  
router
  .route('/:email')
  .get(getOnce)
  .put(putOnce)

  

export default router;
