/**
 *
 * @param {*} ha ha global object. Use global.get('homeassistant').homeAssistant
 * @param {*} entitySpecs entitiy specs array. Each object can be:
 *    {name: 'entity name', id: 'ha entity id'} or
 *    {name: 'internal spec object', spec: [{name, id}]}
 */
export function getHaEntityStates (ha, entitySpecs) {
  return entitySpecs.reduce((acc, spec) => {
      if (spec.spec) {
          acc[spec.name] = getHaEntityStates(ha, spec.spec);
      } else {
          acc[spec.name] = ha[spec.id];
      }
      return acc;
  }, {});
}
