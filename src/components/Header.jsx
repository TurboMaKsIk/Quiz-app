const Header = ({ allQuest, quise}) => {
    return(
          <>
            <div className="main-title-flex">
              <h1>Quiz</h1>
              <h2>{`${quise}/${allQuest}`}</h2>
            </div>
            <div className="progress-bar">
              <span style={{width: quise / allQuest * 100 + '%'}}></span>
            </div>
          </>
    );
  }

export default Header;