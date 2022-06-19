import './app-info.css';

const AppInfo = ({increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Acounting employees in Some company</h1>
            <h2>Amount of employees: {employees}</h2>
            <h2>Bonuses will receive: {increased}</h2>
        </div>
    );
}

export default AppInfo;