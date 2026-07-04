import * as migration_20260704_161506_initial from './20260704_161506_initial';

export const migrations = [
  {
    up: migration_20260704_161506_initial.up,
    down: migration_20260704_161506_initial.down,
    name: '20260704_161506_initial'
  },
];
