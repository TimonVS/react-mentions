import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import { provideExampleValue } from './higher-order'
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

const TextArea = ({ inputRef, style, ...props }) => (
  <textarea ref={inputRef} style={{ ...style, color: '#bd10e0' }} {...props} />
)

function CustomControl({ value, data, onChange, onAdd }) {
  return (
    <div>
      <h3>Render custom control</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        style={defaultStyle}
        markup="@[__display__](__type__:__id__)"
        renderControl={({ getInputProps }) => (
          <TextArea {...getInputProps({ refKey: 'inputRef' })} />
        )}
      >
        <Mention data={data} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  )
}

const asExample = provideExampleValue('Hi @[John Doe](user: johndoe)!')

export default asExample(CustomControl)
