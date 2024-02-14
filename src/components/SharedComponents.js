function Button({ onClick }) {
    return (
        <div>
            <button onClick={() => console.log('Button clicked')} className="button">
            Click Here!
            </button>
        </div>
    );
  }
  
export { Button };