const RotateText = () =>{
    const rotateAngle =30;

    const textStyle = {
        transform: `rotate(${rotateAngle})`
    }
    return (
        <div style={textStyle}>
            <p>your text</p>
        </div>
    )
}

export default RotateText;