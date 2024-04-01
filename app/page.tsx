import TimestampInteractor from './components/timestamp-ineractor';
import IconExternalLink from '../components/IconExternalLink';

export default function Home() {
  return (
    <>
      <header className="text-center mt-2">
        <h1 className="text-3xl font-bold mb-2">Discord Timestamp Generator</h1>
        <p className="text-lg text-gray-400">Convert timestamps between different time zones for Discord users.</p>
      </header>
      {/* 实现 */}
      <article className="article-block text-center mt-5">
        Experience the convenience of seamless time coordination across global Discord communities with our intuitive
        tool. &nbsp;
        <a className='manual-link' rel='external' href='https://discord.com' target='_blank'>
          Go to discord <IconExternalLink className='text-sm' />
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='manual-link' rel='external' href='https://discord.com/developers/docs/reference#message-formatting-timestamp-styles' target='_blank'>
          Discord Timestamp Styles <IconExternalLink className='text-sm' />
        </a><br />
        <TimestampInteractor />
      </article>
      {/* 用法 */}
      <article className="article-block mt-5">
        <h2 className="text-2xl font-bold mb-2">How to use it?</h2>
        <p>Step 1: Choose a specific time on the inputer.</p>
        <p>Step 2: Click the icon behind which time format you wanna use in discord.</p>
        <p>Step 3: Paste it into input box of discord.</p>
      </article>
      {/* 解释 */}
      <article className="article-block mt-5">
        <h2 className="text-2xl font-bold mb-2">What is Discord Timestamp Generator</h2>
        <p>
          Designed to cater to the diverse needs of online groups, this utility simplifies the process of scheduling
          events and announcements. By selecting a specific time in the tool, you can effortlessly generate markdown
          text that, when posted in Discord, automatically adjusts to display the corresponding time in each user&apos;s
          local timezone. This ensures clear communication and eliminates the confusion of time conversions, making it
          ideal for coordinating multiplayer gaming sessions, virtual meetings, or any group activities. Once the time
          is inputted, simply copy the generated markdown from below and paste it into your Discord chat or channel.
          Watch as it transforms into a universally understood timestamp, keeping your community synchronized and
          informed.
        </p>
      </article>
      {/* 解释 */}
      <article className="article-block mt-5">
        <h2 className="text-2xl font-bold mb-2">What is Discord Community</h2>
        <p>
          Discord is a popular communication platform designed for creating communities. It is primarily used by gamers
          but has grown to encompass a wide range of interests and communities. The platform allows users to communicate
          via voice calls, video calls, text messaging, and media and file sharing.One of the key advantages of Discord
          is its ease of use. It offers a clean, intuitive interface that makes it simple for users to join and
          participate in communities. Another significant benefit is the platform&apos;s ability to create separate channels
          within a server for different topics or conversations, which helps keep discussions organized and
          accessible.Discord also supports high-quality voice and video calls, enabling users to engage in real-time
          communication without the need for additional software. The platform&apos;s robust moderation tools empower server
          administrators to manage their communities effectively, ensuring a safe and welcoming environment for all
          members.Moreover, Discord is free to use, with premium features available through a subscription service
          called Discord Nitro. This affordability makes it an attractive option for both individuals and organizations
          looking for a versatile communication tool. Discord&apos;s official website is https://discord.com/, where users can
          download the app, join existing communities, or create their own servers to connect with others around the
          globe.
        </p>
      </article>
    </>
  );
}
