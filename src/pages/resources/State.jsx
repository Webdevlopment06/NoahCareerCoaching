import React, { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StateContent from '../../components/StateContent'

const STATES = [
  { abbr: 'al', name: 'Alabama' },{ abbr: 'ak', name: 'Alaska' },{ abbr: 'az', name: 'Arizona' },
  { abbr: 'ar', name: 'Arkansas' },{ abbr: 'ca', name: 'California' },{ abbr: 'co', name: 'Colorado' },
  { abbr: 'ct', name: 'Connecticut' },{ abbr: 'de', name: 'Delaware' },{ abbr: 'dc', name: 'District of Columbia' },
  { abbr: 'fl', name: 'Florida' },{ abbr: 'ga', name: 'Georgia' },{ abbr: 'hi', name: 'Hawaii' },
  { abbr: 'id', name: 'Idaho' },{ abbr: 'il', name: 'Illinois' },{ abbr: 'in', name: 'Indiana' },
  { abbr: 'ia', name: 'Iowa' },{ abbr: 'ks', name: 'Kansas' },{ abbr: 'ky', name: 'Kentucky' },
  { abbr: 'la', name: 'Louisiana' },{ abbr: 'me', name: 'Maine' },{ abbr: 'md', name: 'Maryland' },
  { abbr: 'ma', name: 'Massachusetts' },{ abbr: 'mi', name: 'Michigan' },{ abbr: 'mn', name: 'Minnesota' },
  { abbr: 'ms', name: 'Mississippi' },{ abbr: 'mo', name: 'Missouri' },{ abbr: 'mt', name: 'Montana' },
  { abbr: 'ne', name: 'Nebraska' },{ abbr: 'nv', name: 'Nevada' },{ abbr: 'nh', name: 'New Hampshire' },
  { abbr: 'nj', name: 'New Jersey' },{ abbr: 'nm', name: 'New Mexico' },{ abbr: 'ny', name: 'New York' },
  { abbr: 'nc', name: 'North Carolina' },{ abbr: 'nd', name: 'North Dakota' },{ abbr: 'oh', name: 'Ohio' },
  { abbr: 'ok', name: 'Oklahoma' },{ abbr: 'or', name: 'Oregon' },{ abbr: 'pa', name: 'Pennsylvania' },
  { abbr: 'ri', name: 'Rhode Island' },{ abbr: 'sc', name: 'South Carolina' },{ abbr: 'sd', name: 'South Dakota' },
  { abbr: 'tn', name: 'Tennessee' },{ abbr: 'tx', name: 'Texas' },{ abbr: 'ut', name: 'Utah' },
  { abbr: 'vt', name: 'Vermont' },{ abbr: 'va', name: 'Virginia' },{ abbr: 'wa', name: 'Washington' },
  { abbr: 'wv', name: 'West Virginia' },{ abbr: 'wi', name: 'Wisconsin' },{ abbr: 'wy', name: 'Wyoming' }
]

export default function State() {
  const [selected, setSelected] = useState(null)

  const labels = useMemo(() => STATES.map(s => ({ id: `label-${s.abbr}`, ...s })), [])

  useEffect(() => {
    // when selected changes, ensure the related accordion is visible
    if (!selected) return
    const collapseId = `collapse-${selected}`
    const headerId = `heading-${selected}`
    const collapseEl = document.getElementById(collapseId)
    const headerEl = document.getElementById(headerId)

    if (collapseEl) {
      // Use Bootstrap's Collapse API if available so state toggling behaves correctly
      const BS = window.bootstrap && window.bootstrap.Collapse
      try {
        if (BS) {
          const inst = BS.getInstance(collapseEl) || new BS(collapseEl, { toggle: false })
          inst.show()
        } else {
          collapseEl.classList.add('show')
        }
      } catch (err) {
        collapseEl.classList.add('show')
      }
    }

    // scroll into view after a small delay so collapse finishes
    setTimeout(() => {
      (headerEl || collapseEl)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 150)
  }, [selected])

  return (
    <main>
      <div className="container my-5">
        <h2 className="mb-4 text-center">Resources by State</h2>

        <div className="row">
          <div className="col-md-7">
            <div id="map-container">
              <img src="/images/statemap.png" alt="USA Map" style={{ width: '100%' }} />
              {labels.map(l => (
                <button
                  key={l.id}
                  type="button"
                  id={l.id}
                  data-state={l.name}
                  className={`state-label ${selected === l.abbr ? 'active' : ''}`}
                  aria-pressed={selected === l.abbr}
                  onClick={() => setSelected(l.abbr)}
                >
                  {l.abbr.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-5">
            <div id="state-info-box" className="p-3 border rounded">
              <h4>Job Resources By State</h4>
              <p className="fw-bold fs-5 text-primary" id="state-name-display">{selected ? `${STATES.find(s => s.abbr === selected).name} (${selected.toUpperCase()})` : 'Click a state to see details.'}</p>
              <hr />
              <div id="state-details">
                {selected ? (
                  <>
                    <p>This is the page for {STATES.find(s => s.abbr === selected).name}.</p>
                    <Link className="btn btn-sm btn-outline-primary" to={`/resources/state/${selected}`}>Go to {selected.toUpperCase()} page</Link>
                  </>
                ) : (
                  <p>At Noah Career Coaching, we provide local job boards, training programs, workforce centers, and community services available where you live. Click a state to access resources.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {STATES.map(s => (
            <div className="accordion-item" key={s.abbr}>
              <h2 className="accordion-header" id={`heading-${s.abbr}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${s.abbr}`} aria-expanded="false" aria-controls={`collapse-${s.abbr}`}>
                  {s.name} ({s.abbr.toUpperCase()})
                </button>
              </h2>
              <div id={`collapse-${s.abbr}`} className="accordion-collapse collapse" aria-labelledby={`heading-${s.abbr}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><StateContent abbr={s.abbr} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
