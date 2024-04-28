import React from 'react';

function TutorHomepage(props: {setScreenId: (screenId: number) => void}) {
    React.useEffect(() => {
        const exampleSocket = new WebSocket("ws://localhost:8000/ws/chat/1/");
        exampleSocket.onopen = (event) => {
            exampleSocket.send("Test message");
        }
        exampleSocket.onclose = (event) => {
            console.log("Connection Closed :(");
        }
    }, [])
    return (
<div className="TutorHomePage container" style={{width: 390, height: 844, position: 'relative', background: 'white'}}>
  <div className="Tutor" style={{left: 30, top: 60, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Tutor</div>
  <div className="Frame120" style={{width: 330, height: 184, left: 30, top: 142, position: 'absolute', background: 'rgba(94, 128, 81, 0.20)', borderRadius: 10, overflow: 'hidden'}}>
    <div className="Academics" style={{left: 14, top: 14, position: 'absolute', color: '#151515', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Academics</div>
    <div className="WhatMethodologiesAndToolsCanBeEmployedToAddressTheChallengesOfIntegratingDiverseDataSourcesIncludingStructuredAndUnstructuredDataInInterdisciplinaryResearchProjectsAimedAtUnderstandingComplexPhenomenaSuchAsClimateChangeOrUrbanization" style={{width: 300, left: 14, top: 37, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>What methodologies and tools can be employed to address the challenges of integrating diverse data sources, including structured and unstructured data, in interdisciplinary research projects aimed at understanding complex phenomena?</div>
  </div>
  <div className="Frame128" style={{width: 330, height: 146, left: 30, top: 341, position: 'absolute', background: 'rgba(190, 77, 77, 0.20)', borderRadius: 10, overflow: 'hidden'}}>
    <div className="Technology" style={{left: 14, top: 14, position: 'absolute', color: '#151515', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Technology</div>
    <div className="HowCanWeEffectivelyImplementAMultiCloudStrategyWhileEnsuringDataSovereigntyComplianceMinimizingLatencyIssuesAndOptimizingCostsAcrossDiverseGeographicalRegions" style={{width: 300, left: 14, top: 37, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>How can we effectively implement a multi-cloud strategy while ensuring data sovereignty compliance, minimizing latency issues, and optimizing costs?</div>
  </div>
  <div className="Frame129" style={{width: 330, height: 127, left: 30, top: 502, position: 'absolute', background: 'rgba(75.19, 151.20, 240.44, 0.20)', borderRadius: 10, overflow: 'hidden'}}>
    <div className="Health" style={{left: 14, top: 14, position: 'absolute', color: '#151515', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Health</div>
    <div className="HowCanWeBestPersonalizeMedicalTreatmentsOnALargeScaleConsideringChallengesLikeDataSharingPatientPrivacyRegulationsAndFairAccess" style={{width: 300, left: 14, top: 37, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>How can we best personalize medical treatments on a large scale, considering challenges like data sharing, patient privacy, regulations, and fair access?</div>
  </div>
  <div className="Frame130" style={{width: 64, height: 29, left: 103, top: 60, position: 'absolute', borderRadius: 20, border: '1px #C2C2C2 solid'}}
    onClick={() => props.setScreenId(1)} />
  <div className="Ellipse19" style={{width: 19, height: 19, left: 108, top: 65, position: 'absolute', background: '#3679DF', borderRadius: 9999}} />
  <div className="Ellipse20" style={{width: 19, height: 19, left: 143, top: 65, position: 'absolute', borderRadius: 9999, border: '1px #C2C2C2 solid'}} />
  <div className="BotNav" style={{width: 390, height: 90, left: 0, top: 754, position: 'absolute', background: '#EAEAEA'}}>
    <div className="HomeIndicator" style={{width: 390, height: 20, left: 0, top: 70, position: 'absolute'}}>
    </div>
    <div className="Frame133" style={{width: 66, padding: 5, left: 35, top: 4, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component5" style={{width: 56, height: 51, position: 'relative'}}>
        <div className="SolidCommunicationComment" style={{width: 32, height: 32, left: 13, top: 0, position: 'absolute'}}>
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4812 0.333374C4.77421 0.333374 -0.476648 8.14251 2.43119 15.2799L3.67431 18.3312C3.78554 18.6042 3.70423 18.9179 3.47435 19.1025L0.845698 21.2136C0.625126 21.3907 0.54037 21.6878 0.634262 21.9546C0.728153 22.2215 0.980244 22.4 1.26314 22.4H11.6902C18.1205 22.4 23.3333 17.1872 23.3333 10.7569C23.3333 5.00015 18.6665 0.333374 12.9098 0.333374H12.4812Z" fill="black"/>
</svg>
        </div>
        <div className="Messages" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Messages</div>
      </div>
    </div>
    <div className="Frame134" style={{width: 59, padding: 5, left: 171, top: 4, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component6" style={{width: 49, height: 51, position: 'relative'}}>
        <div className="SolidStatusBookOpen" style={{width: 32, height: 32, left: 9, top: 0, position: 'absolute'}}>
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3198 2.48108C9.58552 0.24052 5.0185 -0.125423 0.975106 1.49194C0.386176 1.72751 0 2.2979 0 2.9322V18.4774C0 19.5187 1.05168 20.2307 2.01849 19.844C5.32961 18.5195 9.06953 18.8192 12.1275 20.654L13.6412 21.5622C13.7567 21.6314 13.8801 21.6617 14 21.6596C14.1199 21.6617 14.2434 21.6314 14.3588 21.5622L15.8725 20.654C18.9305 18.8192 22.6704 18.5195 25.9815 19.844C26.9483 20.2307 28 19.5187 28 18.4774V2.9322C28 2.2979 27.6138 1.72751 27.0249 1.49194C22.9815 -0.125423 18.4145 0.24052 14.6802 2.48108L14 2.88921L13.3198 2.48108ZM15 5.66667C15 5.11438 14.5523 4.66667 14 4.66667C13.4477 4.66667 13 5.11438 13 5.66667V18.3333C13 18.8856 13.4477 19.3333 14 19.3333C14.5523 19.3333 15 18.8856 15 18.3333V5.66667Z" fill="black"/>
<path d="M1.63312 22.3896C4.33159 20.8155 7.6684 20.8155 10.3669 22.3896L11.8166 23.2353C13.1658 24.0223 14.8342 24.0223 16.1834 23.2353L17.6331 22.3896C20.3316 20.8155 23.6684 20.8155 26.3669 22.3896L26.5039 22.4696C26.9809 22.7478 27.1421 23.3602 26.8638 23.8372C26.5855 24.3143 25.9732 24.4754 25.4961 24.1971L25.3591 24.1172C23.2834 22.9064 20.7166 22.9064 18.6409 24.1172L17.1912 24.9629C15.2192 26.1132 12.7808 26.1132 10.8088 24.9629L9.35914 24.1172C7.28339 22.9064 4.71661 22.9064 2.64086 24.1172L2.50387 24.1971C2.02682 24.4754 1.4145 24.3143 1.13622 23.8372C0.857941 23.3602 1.01908 22.7478 1.49613 22.4696L1.63312 22.3896Z" fill="black"/>
</svg>
        </div>
        <div className="Contacts" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Contacts</div>
      </div>
    </div>
    <div className="Frame135" style={{width: 45, padding: 5, left: 310, top: 4, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="Component7" style={{width: 35, height: 51, position: 'relative'}}>
      <div className="SolidCommunicationUser" style={{width: 32, height: 32, left: 2, top: 0, position: 'absolute'}}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0C8.23854 0 5.99996 2.23858 5.99996 5C5.99996 7.76142 8.23854 10 11 10C13.7614 10 16 7.76142 16 5C16 2.23858 13.7614 0 11 0Z" fill="black"/>
<path d="M5.66663 12.6667C2.9052 12.6667 0.666626 14.9052 0.666626 17.6667V19.251C0.666626 20.2554 1.39447 21.1117 2.38565 21.2735C8.09076 22.2049 13.9092 22.2049 19.6143 21.2735C20.6054 21.1117 21.3333 20.2554 21.3333 19.251V17.6667C21.3333 14.9052 19.0947 12.6667 16.3333 12.6667H15.8788C15.6328 12.6667 15.3884 12.7056 15.1545 12.7819L14.0005 13.1587C12.0508 13.7954 9.94912 13.7954 7.99941 13.1587L6.84539 12.7819C6.61155 12.7056 6.36711 12.6667 6.12112 12.6667H5.66663Z" fill="black"/>
</svg>
</div>
<div className="Profile" style={{left: 0, top: 37, position: 'absolute'}}>
    <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Profile</span>
</div>

      </div>
    </div>
  </div>
</div>
    )
}
export default TutorHomepage;

//<div className="Profile" style={{left: 0, top: 37, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Profile</div>
       /*<div className="SolidCommunicationUser" style={{width: 32, height: 32, left: 2, top: 0, position: 'absolute'}}>
          <div className="Icon" style={{width: 20.67, height: 21.97, left: 5.67, top: 5, position: 'absolute', background: 'black'}}></div>
        </div>
        <div className="Profile" style={{left: 0, top: 37, position: 'absolute'}}>
  <img src="/Profile.svg" alt="Profile Icon" style={{width: 24, height: 24}} />
  <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Profile</span>*/
  //          <div className="Icon" style={{width: 28, height: 25.33, left: 2, top: 3.50, position: 'absolute', background: 'black'}}></div>
  //          <div className="Icon" style={{width: 22.74, height: 22.07, left: 4.60, top: 5.33, position: 'absolute', background: 'black'}}></div>
  //      <div className="Icon" style={{width: 15.50, height: 11.50, left: 4, top: 6, position: 'absolute', background: '#515151'}}></div>