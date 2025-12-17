import { motion } from 'framer-motion';
import { GlobeIcon, MedalIcon, UsersIcon } from 'lucide-react';
import {AnimatedNumber} from '@/components/animated-number';

interface StatCard {
    id: number;
    icon: React.ReactNode;
    value: string;
    label: string;
}


const stats: StatCard[] = [
    {
        id: 1,
        icon: <GlobeIcon className="w-8 h-8 text-zinc-500" />,
        value: '6+',
        label: 'Countries',
    },
    {
        id: 2,
        icon: <MedalIcon className="w-8 h-8 text-zinc-500" />,
        value: '15+',
        label: 'Years',
    },
    {
        id: 3,
        icon: <UsersIcon className="w-8 h-8 text-zinc-500" />,
        value: '100+',
        label: 'Partners',
    },
];

export default function StatsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            {stats.map((stat, index) => (
                <StatCardComponent
                    key={stat.id}
                    stat={stat}
                    delay={index * 150}
                />
            ))}
        </motion.div>
    );
}



interface StatCardProps {
    stat: StatCard;
    delay: number;
}

const StatCardComponent: React.FC<StatCardProps> = ({ stat, delay }) => {
    // use in view from framer to translate from y-12 to y-0
    
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center overflow-hidden transition-all duration-700 hover:shadow-lg `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg?width=200&height=120")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '20px',
                    backgroundPosition: 'left top',
                }}
            />

            <div className="relative z-10 space-y-4">
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="text-5xl md:text-6xl font-semibold text-zinc-900">
                    <AnimatedNumber value={stat.value} />
                </h3>
                <p className="text-base text-zinc-600">{stat.label}</p>
            </div>
        </motion.div>
    );
};
