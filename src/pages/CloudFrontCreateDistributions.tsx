import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import TextInput from '../components/TextInput'
import ExpansionPanel from '../components/expansion-panel/ExpansionPanel'
import Card from '../components/Card'
import { required, isDomain, isPath } from '../utils/validation'
import RadioGroup from '../components/RadioGroup'
import Button from '../components/Button'
import Autocomplete from '../components/Autocomplete'

const Wrapper = styled.div`
  margin-top: 36px;
  padding: 20px 36px;
  max-width: 800px;

  & .breadcrumb {
    font-size: 14px;
    & span {
      margin: 0 4px;
      color: #545b64;
    }
  }

  & .main {
    padding: 24px 0;
  }
`

function CloudFrontCreateDistributions() {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Wrapper>
      <div className="breadcrumb">
        <a href="/a">CloudFront</a> <span>&gt;</span>
        <a href="/b">Distributions</a> <span>&gt;</span>
        <span>Create</span>
      </div>
      <div className="main">
        <h1>Create distribution</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex-column">
          <Card>
            <ExpansionPanel>
              <ExpansionPanel.Title>Origin</ExpansionPanel.Title>
              <ExpansionPanel.Content>
                <div className="flex-column">
                  <Autocomplete
                    id="orginDomain"
                    label="Origin domain"
                    description="description"
                    placeholder="Choose origin domain"
                    items={['a', 'b', 'c']}
                    setValue={setValue}
                    register={register}
                    trigger={trigger}
                    registerOptions={{
                      validate: {
                        required,
                        isDomain,
                      },
                    }}
                    errors={errors}
                  />
                  <TextInput
                    id="originPath"
                    label="Origin path - optional"
                    description="Enter a URL path to append to the origin domain name for origin requests."
                    placeholder="Enter the origin path"
                    register={register}
                    registerOptions={{
                      validate: { isPath },
                    }}
                    errors={errors}
                  />
                  <TextInput
                    id="name"
                    label="Name"
                    description="Enter a name for this origin."
                    placeholder="Enter origin name"
                    register={register}
                    registerOptions={{
                      validate: { required },
                    }}
                    errors={errors}
                  />
                  <RadioGroup
                    id="OriginAccess"
                    label="Origin access"
                    options={[
                      {
                        id: 'public',
                        label: 'Public',
                        value: 'public',
                        description: 'Bucket must allow public access.',
                      },
                      {
                        id: 'originAccessControlSettings',
                        label: 'Origin access control settings (recommended)',
                        value: 'originAccessControlSettings',
                        description: 'Bucket can restrict access to only CloudFront.',
                      },
                      {
                        id: 'legacyAccessIdentities',
                        label: 'Legacy access identities',
                        value: 'legacyAccessIdentities',
                        description:
                          'Use a CloudFront origin access identity (OAI) to access the S3 bucket.',
                      },
                    ]}></RadioGroup>
                  <RadioGroup
                    id="enableOriginShield"
                    label="Enable Origin Shield"
                    description="Origin shield is an additional caching layer that can help reduce the load on your origin and help protect its availability."
                    options={[
                      {
                        id: 'no',
                        label: 'No',
                        value: false,
                      },
                      {
                        id: 'yes',
                        label: 'Yes',
                        value: true,
                      },
                    ]}></RadioGroup>
                </div>
              </ExpansionPanel.Content>
            </ExpansionPanel>
          </Card>
          <div className="flex-row">
            <Button type="submit">Cancel</Button>
            <Button type="submit" color="orange">
              Create distribution
            </Button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default CloudFrontCreateDistributions
