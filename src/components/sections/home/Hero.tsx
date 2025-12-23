'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  title: 'Build the Future',
  subtitle: 'Ship faster with our minimal tech stack',
  description:
    'The only platform you need to launch, scale, and grow your startup. Built for developers who value simplicity and speed.',
  ctaText: 'Start Building',
  ctaHref: '/signup',
  secondaryCtaText: 'View Demo',
  secondaryCtaHref: '/demo',
  features: ['Deploy in seconds', 'Scale automatically', 'Monitor everything'],
  stats: [
    { label: 'Deployments', value: '10M+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Developers', value: '50K+' },
  ],
  badgeText: 'Now in Beta',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span data-editable="badgeText">{config.badgeText}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span data-editable="title">{config.title}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              <span data-editable="subtitle">{config.subtitle}</span>
            </h2>
          </div>

          {/* Description */}
          <div
            className={`mb-12 transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div
            className={`mb-16 transition-all duration-700 delay-750 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span
                    data-editable={`features[${idx}]`}
                    className="text-sm sm:text-base font-medium"
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Card className="bg-card text-card-foreground border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {config.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
