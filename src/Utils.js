//Get a property data-test in a jsx component
const findByTestAtrr = (component, attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export default findByTestAtrr;
