import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import Input from '../components/Input'
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

  .buttons-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: end;
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
        <Card>
          <ExpansionPanel>
            <ExpansionPanel.Title>Origin</ExpansionPanel.Title>
            <ExpansionPanel.Content>
              <Autocomplete
                id="orginDomain"
                label="Origin domain"
                description="description"
                placeholder="Choose origin domain"
                items={[
                  'react-project.s3.ap-northeast-1.amazonaws.com',
                  'ts-project.s3.ap-northeast-1.amazonaws.com',
                  'react-hook-form-example-project.s3.ap-northeast-1.amazonaws.com',
                  'project-a.s3.ap-northeast-1.amazonaws.com',
                  'project-b.s3.ap-northeast-1.amazonaws.com',
                  'project-c.s3.ap-northeast-1.amazonaws.com',
                  'project-d.s3.ap-northeast-1.amazonaws.com',
                  'project-e.s3.ap-northeast-1.amazonaws.com',
                  'project-f.s3.ap-northeast-1.amazonaws.com',
                ]}
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
              <Input
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
              <Input
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
                id="originAccess"
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
                ]}
                register={register}
              />
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
                ]}
                register={register}
              />
              <ExpansionPanel>
                <ExpansionPanel.Title dense>Additional settings</ExpansionPanel.Title>
                <ExpansionPanel.Content>
                  <Input
                    id="connectionAttempts"
                    type="number"
                    label="Connection attempts"
                    description="The number of times that CloudFront attempts to connect to the origin, from 1 to 3. The default is 3."
                    register={register}
                    defaultValue={3}
                    registerOptions={{
                      valueAsNumber: true,
                      validate: { required },
                    }}
                    errors={errors}
                  />
                  <Input
                    id="ConnectionTimeout"
                    type="number"
                    label="Connection timeout"
                    description="The number of seconds that CloudFront waits for a response from the origin, from 1 to 10. The default is 10."
                    defaultValue={10}
                    register={register}
                    registerOptions={{
                      valueAsNumber: true,
                      validate: { required },
                    }}
                    errors={errors}
                  />
                  <Input
                    id="responseTimeout"
                    type="number"
                    label="Response timeout - only applicable to custom origins"
                    description="The number of seconds that CloudFront waits for a response from the origin, from 1 to 60. The default is 30."
                    defaultValue={35}
                    register={register}
                    registerOptions={{
                      valueAsNumber: true,
                      validate: { required },
                    }}
                    errors={errors}
                  />
                  <Input
                    id="keepAliveTimeout"
                    type="number"
                    label="Keep-alive timeout - only applicable to custom origins"
                    description="The number of seconds that CloudFront maintains an idle connection with the origin, from 1 to 60. The default is 5."
                    defaultValue={5}
                    register={register}
                    registerOptions={{
                      valueAsNumber: true,
                      validate: { required },
                    }}
                    errors={errors}
                  />
                </ExpansionPanel.Content>
              </ExpansionPanel>
            </ExpansionPanel.Content>
          </ExpansionPanel>
        </Card>
        <div className="buttons-wrapper">
          <Button type="reset">Cancel</Button>
          <Button type="submit" color="orange">
            Create distribution
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}

export default CloudFrontCreateDistributions
