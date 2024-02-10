import Magnetic from '@/app/Components/Magnetic'
import Links from '@/app/ui/Link'

function Logo() {
  return (
    <Links href="#home">
      <Magnetic>
        <div className="w-20 h-20 relative">
          <Magnetic distance={0.1}>
            <div
              className="w-[90%] h-auto aspect-square rounded-full bg-gradient-to-t 
        from-[#fdc074] via-[#fed9aa] to-[#ffecd5]"
            ></div>
          </Magnetic>
          <div
            className="w-[70%] h-auto aspect-square rounded-full bg-gradient-to-t 
        from-primary-dark via-primary-light to-[#ffecd5] absolute top-[35%] left-[35%]"
          ></div>
        </div>
      </Magnetic>
    </Links>
  )
}

export default Logo
