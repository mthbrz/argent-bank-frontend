import '../main.css';

function AccountSection({ title, children }) {
    return (
        <section className="account">
            <h2 className="account-title">{title}</h2>
            {children}
        </section>
    );
}

export default AccountSection;