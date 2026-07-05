import * as migration_20260704_161506_initial from './20260704_161506_initial';
import * as migration_20260704_194256_terminy_form from './20260704_194256_terminy_form';
import * as migration_20260704_200340_eventy_pakiety from './20260704_200340_eventy_pakiety';
import * as migration_20260705_135518_terminy_form_v2 from './20260705_135518_terminy_form_v2';

export const migrations = [
  {
    up: migration_20260704_161506_initial.up,
    down: migration_20260704_161506_initial.down,
    name: '20260704_161506_initial',
  },
  {
    up: migration_20260704_194256_terminy_form.up,
    down: migration_20260704_194256_terminy_form.down,
    name: '20260704_194256_terminy_form',
  },
  {
    up: migration_20260704_200340_eventy_pakiety.up,
    down: migration_20260704_200340_eventy_pakiety.down,
    name: '20260704_200340_eventy_pakiety',
  },
  {
    up: migration_20260705_135518_terminy_form_v2.up,
    down: migration_20260705_135518_terminy_form_v2.down,
    name: '20260705_135518_terminy_form_v2'
  },
];
