import { STATES } from '../constants';

/**
 *
 * @param {*} roomState roomState object - an object that contains
 *    key/name pairs, where the key is the entity name and the value
 *    is the entity object
 * @param {*} keys the keys in roomState to check 'on' state for
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
}

export function getOnEntitiesInRoomString (roomState, keys) {
  const entities = getOnEntitiesInRoom(roomState, keys);
  return entities.reduce((acc, entity) => {
    return acc += `${entity.attributes.friendly_name} is ${entity.state}\n`;
  }, '');
}
