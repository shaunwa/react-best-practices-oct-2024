export default function InfoForm({ name, onNameChanged, email, onEmailChanged, newsletter, onNewsletterChanged, buttonText, onButtonClicked }) {
    return (
        <div>
            <div>
                <input placeholder="Enter your name..." value={name} onChange={e => onNameChanged(e.target.value)} />
            </div>
            <div>
                <input placeholder="Enter your email..." value={email} onChange={e => onEmailChanged(e.target.value)} />
            </div>
            <div>
                <input type="checkbox" checked={newsletter} onChange={() => onNewsletterChanged(!newsletter)} />
                <p>Sign me up for the newsletter!</p>
            </div>
            <button onClick={onButtonClicked}>{buttonText}</button>
        </div>
    );
}