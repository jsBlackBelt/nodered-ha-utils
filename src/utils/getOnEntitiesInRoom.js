import { STATES } from '../constants';

/**
 *
 * @param {*} roomState roomState object
 * @param {*} keys the keys in roomState to check on state for
 *
 * @returns an array on entities
 */
export function getOnEntitiesInRoom (roomState, keys) {
  const entities = [];
  keys.map(key => {
      const entity = roomState[key];
      if (entity.state === STATES.ON) {
          entities.push(entity);
      }
  });
  return entities;
};
