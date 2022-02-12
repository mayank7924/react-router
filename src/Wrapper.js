const wrapper = (Component) => ({...props}) => (
    <div style={{ border: "2px solid blue", borderRadius: "3px" }}>
        <h1>This is the wrapper content</h1>
        <Component {...props}/>
    </div>
)

export default wrapper;