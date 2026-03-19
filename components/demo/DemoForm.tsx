'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const inputBase =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition'

export default function DemoForm() {
  const [state, handleSubmit, reset] = useForm('mpqybndj')
  const [phoneValue, setPhoneValue] = useState<string | undefined>(undefined)
  const [phoneError, setPhoneError] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPhoneError('')

    if (!phoneValue) {
      setPhoneError('Please enter your phone number.')
      return
    }
    if (!isValidPhoneNumber(phoneValue)) {
      setPhoneError('Please enter a valid phone number.')
      return
    }

    handleSubmit(e)
  }

  function handleReset() {
    reset()
    setPhoneValue(undefined)
  }

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border-2 border-teal/30 bg-teal/5 p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="text-xl font-extrabold text-navy mb-2">Demo request received!</h3>
        <p className="text-slate-bpo mb-6">
          Thank you for your interest. We&apos;ll reach out within 2 business hours to schedule your demo.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="btn-primary px-6 py-3 text-sm"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {state.errors && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <ValidationError errors={state.errors} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Full Name *</label>
          <input
            name="fullName"
            type="text"
            placeholder="Your full name"
            className={inputBase}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Company Name *</label>
          <input
            name="companyName"
            type="text"
            placeholder="Your BPO or company name"
            className={inputBase}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Work Email *</label>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            className={inputBase}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number *</label>
          <PhoneInput
            international
            defaultCountry="US"
            value={phoneValue}
            onChange={(v) => {
              setPhoneValue(v ?? undefined)
              setPhoneError('')
            }}
            onBlur={() => {
              if (phoneValue && !isValidPhoneNumber(phoneValue)) {
                setPhoneError('Please enter a valid phone number.')
              }
            }}
            name="phone"
            placeholder="Enter phone number"
            className={`PhoneInput ${phoneError ? 'border-red-500' : ''}`}
            numberInputProps={{
              className: inputBase,
              required: true,
              name: 'phone',
            }}
            countrySelectProps={{
              className: '!px-3 !py-3 !rounded-l-xl !border !border-gray-200 !bg-gray-50',
            }}
          />
          {phoneError && (
            <p className="mt-1 text-xs text-red-600">{phoneError}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Number of Agents</label>
          <select name="agentCount" className={inputBase}>
            <option value="">Select range</option>
            <option value="1–10 agents">1–10 agents</option>
            <option value="11–25 agents">11–25 agents</option>
            <option value="26–50 agents">26–50 agents</option>
            <option value="51–100 agents">51–100 agents</option>
            <option value="100+ agents">100+ agents</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Campaign Type</label>
          <select name="campaignType" className={inputBase}>
            <option value="">Select type</option>
            <option value="Subscription Sales">Subscription Sales</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Survey">Survey</option>
            <option value="Grievance / Ticket Handling">Grievance / Ticket Handling</option>
            <option value="Multiple types">Multiple types</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Current Tool</label>
        <select name="currentTool" className={inputBase}>
          <option value="">What are you using today?</option>
          <option value="Excel / Macros">Excel / Macros</option>
          <option value="VICIDIAL">VICIDIAL</option>
          <option value="Salesforce">Salesforce</option>
          <option value="Zoho CRM">Zoho CRM</option>
          <option value="Another CRM">Another CRM</option>
          <option value="No tool / manual process">No tool / manual process</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Message (optional)</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your campaigns or anything specific you'd like to see in the demo..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Book My Free Demo →'}
      </button>
      <p className="text-center text-xs text-slate-bpo">
        No credit card required · We respond within 2 business hours
      </p>
    </form>
  )
}
