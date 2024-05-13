import IconMail from '@/components/IconMail';

export default function LayoutFooter() {
  return (
    <footer className="divide-y divide-neutral-500 bg-neutral-900 text-neutral-300 mt-8">
      <div className="container-fit">
        <div className="basis-full sm:basis-1/3">
          <div className="text-neutral-50 font-bold inline-flex items-center">Discordtimestampsgenerator</div>
        </div>
        <div className="basis-full sm:basis-1/3 text-left sm:text-right">
          <div className="text-neutral-50 font-bold">Resources</div>
          <ul>
            <li>
              <a className="link" href="https://rapidpikka.com" target="_blank">
                Rapid Pikka | AI Image Generator
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-full sm:basis-1/3 text-left sm:text-right">
          <div className="text-neutral-50 font-bold">Socials</div>
          <ul>
            <li>
              <a href="mailto: support@discordtimestampsgenerator.com">
                <IconMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fit flex-col sm:flex-row">
        <span>&copy; 2024 Discordtimestampsgenerator All rights reserved.</span>
      </div>
    </footer>
  );
}
