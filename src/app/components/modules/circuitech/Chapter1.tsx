import { Battery, Lightbulb, Zap, Image as ImageIcon } from "lucide-react";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-prose bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 my-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 m-0">
        {title}
      </h2>
      <div className="prose max-w-none mt-4">{children}</div>
    </section>
  );
}

function DiagramCard({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-4 my-6">
      <div className="flex items-center gap-2 mb-3">
        <ImageIcon className="w-4 h-4 text-gray-600" />
        <p className="text-sm text-gray-700 m-0">{label}</p>
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg border border-gray-200 bg-white"
      />
      <p className="text-xs text-gray-500 mt-2 mb-0">
        Put image in <code>public/images/circuitech/ch1/</code> and update the path if needed.
      </p>
    </div>
  );
}

export function Chapter1() {
  return (
    <div className="prose max-w-none">
      <h1>Chapter 1: Introduction</h1>

      {/* Learning Objectives */}
      <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg mb-2 text-gray-900">Learning Objectives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Get familiar with the course and how it works</li>
              <li>Identify the materials and symbols used</li>
              <li>Learn circuit connections: series vs parallel</li>
              <li>Understand breadboard basics</li>
              <li>Build your first breadboard LED circuit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intro (keep as prose, no cards) */}
      <h2>1. INTRODUCTION</h2>
      <div className="space-y-4">
        <p>
          Welcome, future Wizards, to SEL’s very own Innovation Hub! We are proud
          to have you onboard as a potential future Innovation Hub Wizard. This
          is the start of a very exciting path ahead of you. Buckle up and keep
          your senses active!
        </p>

        <p>
          “CircuiTech Wizard” is designed to let participants explore the world
          of electricity by starting from learning the basic fundamental
          components of electronics, introducing them to wiring electrical
          circuits, up to designing their own circuit board and introducing them
          to the computing world through Arduino coding with IDE Software! The
          participants will actively work their way through the course by
          learning the theory and applying it in the practical sessions.
        </p>

        <p>
          Throughout the journey, the participants’ skills will be enhanced
          through self-learning methods, thus developing high-order thinking
          skills, and they will also be guided by our skilled mentors.
        </p>

        <p>
          SEL believes self-learning in CircuiTech Wizard provides the crucial
          platform to spark interests in our students which would lead them to
          be well-equipped for Brunei’s Vision 2035, as well as efforts of
          digitalisation and IR4.0.
        </p>
      </div>

      {/* Two quick cards */}
      <div className="not-prose grid md:grid-cols-2 gap-6 my-10">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Battery className="w-8 h-8 text-green-600" />
            <h3 className="text-lg text-gray-900 m-0">Power Source</h3>
          </div>
          <p className="text-gray-700 text-sm m-0">
            A battery converts chemical energy into electrical energy and can be
            used to power electronics and electrical devices.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            <h3 className="text-lg text-gray-900 m-0">LED Indicator</h3>
          </div>
          <p className="text-gray-700 text-sm m-0">
            An LED lights up when current flows into the anode (+) and exits
            through the cathode (-).
          </p>
        </div>
      </div>

      {/* Mini chapters as cards */}
      <SectionCard title="1.1 The Materials">
        <p>
          This book includes all of the materials you'll need to create the
          circuits in it. It is cheap and easy to find. The electronic components
          are listed below.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-3 py-2 text-left">
                  Component
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-gray-200 px-3 py-2">Batteries</td>
                <td className="border border-gray-200 px-3 py-2">
                  A battery is a container consist of 1 or more cells that convert
                  chemical energy to electrical energy. It can be used to power
                  electronics and electrical devices.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Battery holder/clip
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  To hold the power supply to the device it is attached to.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Electrical wires
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  To allow the electricity to flow from one electrical component
                  to other.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">SPDT Switch</td>
                <td className="border border-gray-200 px-3 py-2">
                  SPDT stands for Single Pole Double Throw. To control two
                  dissimilar circuits through a similar single input.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Push Button</td>
                <td className="border border-gray-200 px-3 py-2">
                  To disconnect or connect the conducting path in an electrical
                  circuit.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Resistor</td>
                <td className="border border-gray-200 px-3 py-2">
                  Reduce the amount of current that flows through it.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Light Emitting Diode (LED)
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  The LED lights up when current flows into the anode (+) and
                  passes out from the cathode (-).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Potentiometer
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  An adjustable voltage divider made up of a three-terminal
                  resistor with a sliding or revolving contact.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Thermistor</td>
                <td className="border border-gray-200 px-3 py-2">
                  A resistor whose resistance is more significantly affected by
                  temperature than conventional resistors. The term is derived
                  from the words thermal and resistor.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Transistor</td>
                <td className="border border-gray-200 px-3 py-2">
                  Normally used as an amplifier or a switch.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">DC motor</td>
                <td className="border border-gray-200 px-3 py-2">
                  Direct current motors transform electrical energy into
                  mechanical energy.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Buzzer</td>
                <td className="border border-gray-200 px-3 py-2">
                  Produces sound in response to an electrical audio signal input.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Fan propeller
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  Cooling or dilution ventilation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">With your materials in hand, let's get started!</p>
      </SectionCard>

      <SectionCard title="1.2 What the components look like">
        <p>
          In order to have your schematics ready, we must familiarize ourselves
          with the components of the drawings. You will see symbols for batteries,
          push button switch, SPDT switch, resistor, LED, potentiometer,
          thermistor, transistor, buzzer, and DC motor in the diagrams.
        </p>

        {/* Optional diagram slot */}
        <DiagramCard
          label="Component symbols reference (optional)"
          src="/images/circuitech/ch1/components-symbols.png"
          alt="Component symbols reference"
        />
      </SectionCard>

      <SectionCard title="1.3 How to build the circuits in this book">
        <h3>Step 1: Circuit Designing</h3>

        <DiagramCard
          label="Example schematic diagram (optional)"
          src="/images/circuitech/ch1/example-schematic.png"
          alt="Example schematic diagram"
        />

        <p>
          Circuit designing involves schematic diagrams that show how to connect
          components to build an electronic circuit.
        </p>

        <h3>Step 2: Types of circuit connection</h3>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-3 py-2 text-left">
                  Series
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left">
                  Parallel
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Total voltage is equal to the sum of the individual voltage drops:
                  <br />
                  V<sub>Total</sub> = V1 + V2 + … + Vn
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  Share the same voltage:
                  <br />
                  V<sub>Total</sub> = V1 = V2 = … = Vn
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Share the same current:
                  <br />
                  I<sub>Total</sub> = I1 = I2 = … = In
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  Total current is equal to the sum of the individual branch currents:
                  <br />
                  I<sub>Total</sub> = I1 + I2 + … + In
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">
                  Total resistance is equal to the sum of the individual resistances:
                  <br />
                  R<sub>Total</sub> = R1 + R2 + … + Rn
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  Total resistance is lower than the sum of its individual resistances:
                  <br />
                  R<sub>Total</sub> = 1 / (1/R1 + 1/R2 + … + 1/Rn)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="1.4 Building circuits on breadboard">
        <p>
          A breadboard is a very basic tool for constructing circuits. Just insert
          the electronic components into the prototype and you can reuse them
          later. The breadboard has strips of metal underneath that connect holes
          on top. Components connect when their pins share the same row in the
          component region. In the supply areas, holes are connected column-wise.
        </p>

        {/* Recommended diagram slot */}
        <DiagramCard
          label="Breadboard layout diagram (recommended)"
          src="/images/circuitech/ch1/breadboard-layout.png"
          alt="Breadboard layout"
        />
      </SectionCard>

      <SectionCard title="1.5 Build your first breadboard circuit">
        <h3>Activity</h3>
        <ol>
          <li>
            Follow the instruction given to build a circuit. Make sure you use all
            the parts listed below.
          </li>
        </ol>

        <h4>i. The parts list</h4>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-3 py-2 text-left">Part</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Value</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border border-gray-200 px-3 py-2">Breadboard</td>
                <td className="border border-gray-200 px-3 py-2">-</td>
                <td className="border border-gray-200 px-3 py-2">
                  Plastic board with around 400 holes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Battery</td>
                <td className="border border-gray-200 px-3 py-2">9V</td>
                <td className="border border-gray-200 px-3 py-2">Standard 9V battery</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Battery clip</td>
                <td className="border border-gray-200 px-3 py-2">-</td>
                <td className="border border-gray-200 px-3 py-2">
                  Connects the battery to the breadboard
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Resistor</td>
                <td className="border border-gray-200 px-3 py-2">470Ω</td>
                <td className="border border-gray-200 px-3 py-2">
                  Reduces the current through the LED
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">LED</td>
                <td className="border border-gray-200 px-3 py-2">Red</td>
                <td className="border border-gray-200 px-3 py-2">
                  Standard output light emitting diode
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Wire</td>
                <td className="border border-gray-200 px-3 py-2">-</td>
                <td className="border border-gray-200 px-3 py-2">
                  Two jumper wires in different colors
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recommended diagram slot */}
        <DiagramCard
          label="First breadboard LED circuit diagram (recommended)"
          src="/images/circuitech/ch1/first-circuit.png"
          alt="First breadboard LED circuit"
        />

        <h4>ii. Building the circuit</h4>
        <p>
          To build the circuit, all you need is a battery, a resistor, and an LED.
          The resistor reduces the amount of current that flows through the LED.
          You will always want a resistor in series with an LED (before or after
          doesn’t matter). Without a resistor, you risk breaking the LED.
        </p>

        <h4>iii. Connecting the resistor</h4>
        <p>
          Examine a resistor and you will see colored bands. The value of the
          resistor is indicated by these colors. (You’ll learn the color code in
          Chapter 2.)
        </p>

        <h4>iv. Connecting the LED</h4>
        <p>
          An LED has two sides: anode and cathode. For the LED to work, connect the
          anode to the positive (+) side of the battery and the cathode to the
          negative (–) side.
        </p>

        <h4>v. Connecting to the power supply columns</h4>
        <p>
          Connect wires from the power supply area to the appropriate rows in the
          component area. The battery’s positive terminal should be connected to
          the resistor lead (using a jumper wire to the positive column).
        </p>

        <h4>vi. Connecting the battery</h4>
        <p>
          Connect the battery clip to the battery, making sure exposed metal of
          the red and black wires does not touch. Connect the red wire to the
          positive column and the black wire to the negative column. The LED
          should light up.
        </p>

        <h4>Note: What if the LED does not light up?</h4>
        <p>
          Double-check each connection. If everything looks correct, the LED may
          be connected incorrectly—flip it and try again. If it still doesn’t
          work, the LED may be dead (this can happen if connected directly to the
          battery without a resistor).
        </p>

        <div className="not-prose mt-8 p-6 bg-gray-100 rounded-xl">
          <h3 className="text-lg mb-3 text-gray-900">Key Takeaways</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Know your materials and component purposes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Understand series vs parallel behavior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Breadboards connect rows (components) and columns (power rails)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Always use a resistor in series with an LED</span>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );
}
