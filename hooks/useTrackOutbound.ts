'use client'

// Add type declaration for dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function useTrackOutbound() {
  const trackOutboundClick = (location: string) => {
    window.dataLayer?.push({
      event: 'conversion',
      event_category: 'outbound',
      event_action: 'click',
      event_label: 'sign_up',
      location: location
    });
  };

  return trackOutboundClick;
} 