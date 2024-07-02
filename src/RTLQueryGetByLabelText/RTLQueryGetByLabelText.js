import React from 'react'

function RTLQuery() {
  return (
    <div>
        <h1>GETBYLABELTEXT Example</h1>

{/*         
        <label htmlFor='user-name'>Username</label>
        <input id="user-name" name='user-name' defaultValue="chinu" />
 */}

        <label htmlFor='user-name1'>Username</label>
        <input id="user-name1" name='user-name' defaultValue="chinu" type='text'/>

        <label htmlFor='user-name2'>Username</label>
        <input id="user-name2" name='user-name' defaultValue="chinu" type='text'/>

        <label htmlFor='user-name3'>Username</label>
        <input id="user-name3" name='user-name' defaultValue="chinu" type='text'/>

        <label htmlFor='skills-1'>Skill</label>
        <input id="skills-1" name='skills-1' defaultChecked={true} type="checkbox" />

        <label htmlFor='skill-2'>Skill</label>
        <input id="skill-2" name='skills-1' defaultChecked={true} type="checkbox" />

    </div>
  )
}

export default RTLQuery