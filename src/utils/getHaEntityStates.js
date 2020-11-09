/**
 *
 * @param {*} ha ha global object. Use global.get('homeassistant').homeAssistant
 * @param {*} entitySpecs entitiy specs array. Each object can be:
 *    {name: 'entity name', id: 'ha entity id'} or
 *    {name: 'internal spec object', spec: [{name, id}]}
 *
 *    Sample usage:
 * const roomState = getHaEntityStates(ha.states, [
    {name: 'temp',          id: 'sensor.temp_sensor'},
    {name: 'humidity',      id: 'sensor.humidity_sensor'},
    {name: 'climate',       id: 'climate.ac'},
    {name: 'motion',        id: 'binary_sensor.motion_sensor'},
    {name: 'light',         id: 'switch.light'},
    {name: 'fan',           id: 'fan.fan'},
    {name: 'windows',       spec: [
        {name: 'north',         id: 'binary_sensor.window_north_sensor'},
        {name: 'west',          id: 'binary_sensor.window_west_sensor'},
    ]}
  ]);
 * Will result in an object with the above names as keys and corresponding ids as values.
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
