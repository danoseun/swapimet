import { createCommentTable } from './comment';
import { seedComments } from './seed';

(async () => {
  try {
    await createCommentTable();
    await seedComments();
  } catch (error) {
    console.error(error);
  }
})();