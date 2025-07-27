export default function Quizs({ quest, onClick }) {
    return(
        <>
            <h2>{quest.title}</h2>
            <div className="quiz-global-blocks">
                {quest.extence.map(item => <button key={item} onClick={() => onClick(item)} className="quiz-blocks-title quiz-blocks">{item}</button>)}
            </div>
        </>
    );
}