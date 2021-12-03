/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Configuration} from '../data_model/configuration';
import {ModelTypeId} from '../data_model/model_type';

export interface Configs {
  config1: Configuration;
  config2: Configuration;
}

/** The main app state. */
export interface AppState {
  configs: Configs;
}

/** The initial app state. */
export const initialState: AppState = {
  configs: {
    config1: {
      modelType: ModelTypeId.TFJS,
    },
    config2: {
      modelType: ModelTypeId.SAME_AS_CONFIG1,
    }
  },
};