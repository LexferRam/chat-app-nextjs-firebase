import Circle from 'better-react-spinkit/dist/Circle';

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img
                    src='./logo.svg'
                    alt=""
                    height={100}
                    height={200}
                />
                <Circle size={60} color="rgb(108, 99, 255)" />
            </div>
        </center>
    );
};

export default Loading;

