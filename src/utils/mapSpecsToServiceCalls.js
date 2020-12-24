/**
 * 
 * @param {Array} specs an array of {desiiredState, entity} pairs
 * 
 * This function will go over all elements of specs array, and for each,
 * if its state is different that the specified desiredState, it will push a new
 * service call object representing the desiredState.
 * 
 *  @returns {Array} serviceCalls array of the form {domain, service, data}
 */
export function mapSpecsToServiceCalls (specs) {
    const calls = [];

    specs.map(spec => {
        const { desiredState, entity } = spec;

        if (entity.state !== desiredState) {
            calls.push({
                domain: 'switch',
                service: `turn_${desiredState}`,
                data: {entity_id: entity.entity_id},
            }); 
        }            
    });

    return calls;
}
