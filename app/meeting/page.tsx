export default function MeetingRedirect() {
  return (
    <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/meeting.html')` }} />
  );
}
