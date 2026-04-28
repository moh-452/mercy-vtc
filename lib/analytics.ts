export function trackEvent(name: string, payload: Record<string, any> = {}) {
  try {
    // GA4 gtag
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', name, payload)
      return
    }

    // dataLayer (Google Tag Manager)
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
      ;(window as any).dataLayer.push({ event: name, ...payload })
      return
    }

    // Fallback for local/dev: console
    // eslint-disable-next-line no-console
    console.log('[analytics] event', name, payload)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Analytics track failed', e)
  }
}

export default { trackEvent }
