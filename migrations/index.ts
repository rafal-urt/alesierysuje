import * as migration_20260704_161506_initial from './20260704_161506_initial';
import * as migration_20260704_194256_terminy_form from './20260704_194256_terminy_form';

export const migrations = [
  {
    up: migration_20260704_161506_initial.up,
    down: migration_20260704_161506_initial.down,
    name: '20260704_161506_initial',
  },
  {
    up: migration_20260704_194256_terminy_form.up,
    down: migration_20260704_194256_terminy_form.down,
    name: '20260704_194256_terminy_form'
  },
];
