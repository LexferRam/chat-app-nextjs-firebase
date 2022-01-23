import Circle from 'better-react-spinkit/dist/Circle';

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                    alt=""
                    height={100}
                    height={200}
                />
                <Circle size={60} color="#3CBC28" />
            </div>
        </center>
    );
};

export default Loading;

