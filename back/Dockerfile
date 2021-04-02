FROM ruby:3.0.0

ENV LANG=C.UTF-8 \
  TZ=Asia/Tokyo

WORKDIR /app

RUN apt-get update -qq && \
  apt-get install -y nodejs default-mysql-client \
  build-essential libpq-dev

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install