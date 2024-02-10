import Magnetic from '@/app/Components/Magnetic'
import Links from '@/app/ui/Link'
import { PageLinks } from '@/app/utils/data'

function Navigation() {
  return (
    <menu className="flex flex-col items-start px-3">
      {PageLinks.map((link) => (
        <li key={`hero_header_${link.link}`}>
          <Links href={link.link} className="font-medium flex p-0.5">
            <Magnetic>
              <p>{link.title}</p>
            </Magnetic>
          </Links>
        </li>
      ))}
    </menu>
  )
}

export default Navigation
