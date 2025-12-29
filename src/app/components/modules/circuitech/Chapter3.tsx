import { CircuitBoard, Gauge, Sparkles } from "lucide-react";

export function Chapter3() {
  return (
    <div className="prose max-w-none">
      <h1>Chapter 3: Advanced Circuits</h1>
      
      <div className="not-prose bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg mb-2 text-gray-900">Learning Objectives</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Design and analyze complex circuit topologies</li>
              <li>Apply circuit theorems for problem-solving</li>
              <li>Understand filters and amplifiers</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Circuit Analysis Theorems</h2>
      <p>
        Advanced circuit analysis requires understanding key theorems that simplify complex 
        circuits and make calculations more manageable.
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-200">
          <h3 className="text-lg mb-3 text-gray-900">Kirchhoff's Voltage Law (KVL)</h3>
          <p className="text-sm text-gray-700 mb-4">
            The sum of all voltages around any closed loop in a circuit equals zero.
          </p>
          <div className="bg-white rounded p-4 text-center">
            <p className="text-2xl text-gray-900">ΣV = 0</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-200">
          <h3 className="text-lg mb-3 text-gray-900">Kirchhoff's Current Law (KCL)</h3>
          <p className="text-sm text-gray-700 mb-4">
            The sum of currents entering a node equals the sum of currents leaving that node.
          </p>
          <div className="bg-white rounded p-4 text-center">
            <p className="text-2xl text-gray-900">ΣI<sub>in</sub> = ΣI<sub>out</sub></p>
          </div>
        </div>
      </div>

      <h3>Thévenin's Theorem</h3>
      <p>
        Any linear circuit with voltage sources and resistors can be simplified to a single 
        voltage source (V<sub>th</sub>) in series with a single resistance (R<sub>th</sub>). 
        This is extremely useful for analyzing complex circuits.
      </p>

      <h3>Norton's Theorem</h3>
      <p>
        Similar to Thévenin's theorem, but represents the circuit as a current source 
        (I<sub>N</sub>) in parallel with a resistance (R<sub>N</sub>).
      </p>

      <h2>Filters and Signal Processing</h2>

      <div className="not-prose my-8">
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Gauge className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl text-gray-900">Filter Types</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="text-md mb-2 text-gray-900">Low-Pass Filter</h4>
              <p className="text-sm text-gray-700">
                Allows low frequencies to pass while attenuating high frequencies. 
                Used in audio applications and smoothing signals.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-md mb-2 text-gray-900">High-Pass Filter</h4>
              <p className="text-sm text-gray-700">
                Allows high frequencies to pass while attenuating low frequencies. 
                Used to remove DC offset and low-frequency noise.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="text-md mb-2 text-gray-900">Band-Pass Filter</h4>
              <p className="text-sm text-gray-700">
                Allows a specific range of frequencies to pass. Used in radio 
                tuners and communication systems.
              </p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="text-md mb-2 text-gray-900">Band-Stop Filter</h4>
              <p className="text-sm text-gray-700">
                Blocks a specific range of frequencies. Also known as notch filter, 
                used to remove unwanted frequency components.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Amplifier Circuits</h2>
      <p>
        Amplifiers increase the amplitude of signals. They're crucial in audio systems, 
        communication devices, and sensor interfaces.
      </p>

      <h3>Common Amplifier Configurations</h3>

      <div className="not-prose bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg p-6 my-8">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
            <h4 className="text-md mb-2 text-gray-900">Common Emitter (CE)</h4>
            <p className="text-sm text-gray-700">
              High voltage gain, inverts signal phase. Most commonly used configuration 
              for voltage amplification.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
            <h4 className="text-md mb-2 text-gray-900">Common Collector (CC)</h4>
            <p className="text-sm text-gray-700">
              Unity voltage gain, high current gain. Also called emitter follower, 
              used for impedance matching and buffering.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
            <h4 className="text-md mb-2 text-gray-900">Common Base (CB)</h4>
            <p className="text-sm text-gray-700">
              High voltage gain, no phase inversion. Used in high-frequency applications 
              and RF circuits.
            </p>
          </div>
        </div>
      </div>

      <h2>Oscillators and Timing Circuits</h2>
      <p>
        Oscillators generate periodic waveforms without an input signal. They're essential 
        for clocks, signal generators, and communication systems.
      </p>

      <div className="not-prose bg-white border rounded-lg p-6 my-6">
        <div className="flex items-center gap-3 mb-4">
          <CircuitBoard className="w-8 h-8 text-teal-600" />
          <h3 className="text-lg text-gray-900">555 Timer IC</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          The 555 timer is one of the most popular ICs for timing and oscillator applications. 
          It can operate in three modes:
        </p>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-teal-600 mt-1">•</span>
            <span><strong>Monostable:</strong> Generates a single pulse of fixed duration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 mt-1">•</span>
            <span><strong>Astable:</strong> Generates continuous square wave pulses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-600 mt-1">•</span>
            <span><strong>Bistable:</strong> Works as a flip-flop or latch</span>
          </li>
        </ul>
      </div>

      <h2>Power Supply Design</h2>
      <p>
        Every electronic circuit needs a stable power supply. Understanding power supply 
        design is crucial for reliable circuit operation.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <h4 className="text-md mb-2 text-gray-900">Rectification</h4>
          <p className="text-sm text-gray-700">
            Converts AC to pulsating DC using diodes
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-md mb-2 text-gray-900">Filtering</h4>
          <p className="text-sm text-gray-700">
            Smooths pulsating DC using capacitors
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-md mb-2 text-gray-900">Regulation</h4>
          <p className="text-sm text-gray-700">
            Maintains constant voltage despite load changes
          </p>
        </div>
      </div>

      <div className="not-prose mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
        <h3 className="text-lg mb-3 text-gray-900">Chapter Summary</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>Circuit theorems simplify complex circuit analysis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>Filters shape frequency response of signals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>Amplifiers are essential for signal processing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>Oscillators generate timing and reference signals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>Power supply design ensures stable circuit operation</span>
          </li>
        </ul>
      </div>

      <div className="not-prose mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg mb-2 text-gray-900">🎓 Congratulations!</h3>
        <p className="text-gray-700">
          You've completed the CircuiTech Wizard module! You now have a solid foundation in 
          electronics and circuit design. Continue practicing and exploring more advanced 
          topics to master the field.
        </p>
      </div>
    </div>
  );
}
