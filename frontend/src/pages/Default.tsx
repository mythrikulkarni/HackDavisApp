import React from 'react';

function Default() {
  return (
<div
className="SignUp container" 
style={{
  width: 390,
  height: 844,
  position: 'relative',
  background: 'white'
}}
>
<div
  className="SelectDefaultRole"
  style={{
    left: 30,
    top: 60,
    position: 'absolute',
    color: 'black',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
    wordWrap: 'break-word'
  }}
>
  Select default role
</div>

<div
  className="YourDefaultRoleIsThePageYouAlwaysLoginWithRolesCanBeSwitched"
  style={{
    width: 330,
    left: 30,
    top: 94,
    position: 'absolute',
    color: 'black',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    wordWrap: 'break-word'
  }}
>
  Your default role is the page you always login with. Roles can be switched.
</div>

<div
  className="Frame96"
  style={{
    width: 330,
    height: 47,
    paddingLeft: 87,
    paddingRight: 87,
    paddingTop: 16,
    paddingBottom: 16,
    left: 30,
    top: 747,
    position: 'absolute',
    background: '#E4E4E4',
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex'
  }}
>
  <div
    className="Done"
    style={{
      color: 'black',
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      wordWrap: 'break-word'
    }}
  >
    Done
  </div>
</div>

<div
  className="Frame113"
  style={{
    width: 330,
    height: 66,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 24,
    paddingRight: 261,
    left: 30,
    top: 162,
    position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px black solid',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'inline-flex'
  }}
>
  <div
    className="Tutor"
    style={{
      color: 'black',
      fontSize: 18,
      fontFamily: 'Inter',
      fontWeight: '400',
      wordWrap: 'break-word'
    }}
  >
    Tutor
  </div>
</div>

<div
  className="Frame114"
  style={{
    width: 330,
    height: 66,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 24,
    paddingRight: 257,
    left: 30,
    top: 248,
    position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px black solid',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'inline-flex'
  }}
>
  <div
    className="Tutee"
    style={{
      color: 'black',
      fontSize: 18,
      fontFamily: 'Inter',
      fontWeight: '400',
      wordWrap: 'break-word'
    }}
  >
    Tutee
  </div>
</div>
</div>
);
}

export default Default;

/*<div className="SignUp" style={{width: 390, height: 844, position: 'relative', background: 'white'}}>
  <div className="SelectDefaultRole" style={{left: 30, top: 60, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Select default role</div>
  <div className="YourDefaultRoleIsThePageYouAlwaysLoginWithRolesCanBeSwitched" style={{width: 330, left: 30, top: 94, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Your default role is the page you always login with. Roles can be switched.</div>
  <div className="Frame96" style={{width: 330, height: 47, paddingLeft: 87, paddingRight: 87, paddingTop: 16, paddingBottom: 16, left: 30, top: 747, position: 'absolute', background: '#E4E4E4', borderRadius: 10, overflow: 'hidden', border: '1px solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div className="Done" style={{color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Done</div>
  </div>
  <div className="Frame113" style={{width: 330, height: 66, paddingTop: 22, paddingBottom: 22, paddingLeft: 24, paddingRight: 261, left: 30, top: 162, position: 'absolute', borderRadius: 10, overflow: 'hidden', border: '1px black solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Tutor" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tutor</div>
  </div>
  <div className="Frame114" style={{width: 330, height: 66, paddingTop: 22, paddingBottom: 22, paddingLeft: 24, paddingRight: 257, left: 30, top: 248, position: 'absolute', borderRadius: 10, overflow: 'hidden', border: '1px black solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Tutee" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tutee</div>
  </div>
</div>
*/