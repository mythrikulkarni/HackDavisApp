import React from 'react';

function TuteeWait(props: {setScreenId: (screenId: number) => void}) {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      props.setScreenId(4);
    }, 5000);
    return () => {
      clearTimeout(timer);
    }
  }, [])
  return (
<div className="TuteeHomePage container" style={{width: 390, height: 844, position: 'relative', background: 'white'}}>
  <div className="BotNav" style={{width: 390, height: 90, left: 0, top: 754, position: 'absolute', background: '#EAEAEA'}}>
    <div className="HomeIndicator" style={{width: 390, height: 20, left: 0, top: 70, position: 'absolute'}}>
      <div className="HomeIndicator" style={{width: 134, height: 5, left: 128, top: 7, position: 'absolute', background: 'black', borderRadius: 100}} />
    </div>
    <div className="Frame133" style={{width: 66, padding: 5, left: 35, top: 4, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component5" style={{width: 56, height: 51, position: 'relative'}}>
        <div className="SolidCommunicationComment" style={{width: 32, height: 32, left: 13, top: 0, position: 'absolute'}}>
          <div className="Icon" style={{width: 22.74, height: 22.07, left: 4.60, top: 5.33, position: 'absolute', background: 'black'}}></div>
        </div>
        <div className="Messages" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Messages</div>
      </div>
    </div>
    <div className="Frame134" style={{width: 59, padding: 5, left: 171, top: 4, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component6" style={{width: 49, height: 51, position: 'relative'}}>
        <div className="SolidStatusBookOpen" style={{width: 32, height: 32, left: 9, top: 0, position: 'absolute'}}>
          <div className="Icon" style={{width: 28, height: 25.33, left: 2, top: 3.50, position: 'absolute', background: 'black'}}></div>
        </div>
        <div className="Contacts" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Contacts</div>
      </div>
    </div>
    <div className="Frame135" style={{width: 45, padding: 5, left: 310, top: 4, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component7" style={{width: 35, height: 51, position: 'relative'}}>
        <div className="SolidCommunicationUser" style={{width: 32, height: 32, left: 2, top: 0, position: 'absolute'}}>
          <div className="Icon" style={{width: 20.67, height: 21.97, left: 5.67, top: 5, position: 'absolute', background: 'black'}}></div>
        </div>
        <div className="Profile" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Profile</div>
      </div>
    </div>
  </div>
  <div className="Frame139" style={{left: 30, top: 60, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="Tutee" style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Tutee</div>
    <div className="Group58" style={{width: 64, height: 29, position: 'relative'}}>
      <div className="Frame130" style={{width: 64, height: 29, left: 0, top: 0, position: 'absolute', borderRadius: 20, border: '1px #C2C2C2 solid'}} />
      <div className="Ellipse19" style={{width: 19, height: 19, left: 40, top: 5, position: 'absolute', background: '#DF7D36', borderRadius: 9999}} />
      <div className="Ellipse20" style={{width: 19, height: 19, left: 5, top: 5, position: 'absolute', borderRadius: 9999, border: '1px #C2C2C2 solid'}} />
    </div>
  </div>
  <div className="Frame120" style={{width: 330, height: 230, left: 30, top: 161, position: 'absolute', background: '#EAEAEA', borderRadius: 10, overflow: 'hidden'}}>
    <div className="Academics" style={{left: 14, top: 14, position: 'absolute', color: '#151515', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Academics</div>
    <div className="WhatMethodologiesAndToolsCanBeEmployedToAddressTheChallengesOfIntegratingDiverseDataSourcesIncludingStructuredAndUnstructuredDataInInterdisciplinaryResearchProjectsAimedAtUnderstandingComplexPhenomenaSuchAsClimateChangeOrUrbanization" style={{width: 303, left: 14, top: 37, justifyContent: 'center', alignItems: 'center', position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>What methodologies and tools can be employed to address the challenges of integrating diverse data sources, including structured and unstructured data, in interdisciplinary research projects aimed at understanding complex phenomena such as climate change or urbanization?</div>
    <div className="Frame143" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 4, paddingBottom: 4, left: 210, top: 195, position: 'absolute', background: 'white', borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
      <div className="DiscardPost" style={{color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}
        onClick={() => props.setScreenId(0)}>Discard Post</div>
    </div>
  </div>
  <div className="QuestionPosted" style={{left: 30, top: 129, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Question Posted</div>
  <div className="Frame145" style={{width: 330, height: 308, left: 30, top: 421, position: 'absolute', background: '#E4E4E4', borderRadius: 10, overflow: 'hidden'}}>
    <div className="WaitingForTutor" style={{left: 93, top: 143, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Waiting for Tutor</div>
  </div>
</div>
  );
}

export default TuteeWait;