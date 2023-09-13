const Progress = ({ progess}) => {
    return (
        <div className="progess-display">
            <div className="progress-bar">
                <div style={{width: progess + '%'}} className="progress-indicator"></div>
            </div>
        </div>
    )
}

export default Progress