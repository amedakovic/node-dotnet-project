using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set;}
        }

        public class Handle : IRequestHandler<Command>
        {
        private readonly DataContext context;
        private readonly IMapper mapper;
            public Handle(DataContext context, IMapper mapper)
            {
            this.mapper = mapper;
            this.context = context;
            }

            async Task<Unit> IRequestHandler<Command, Unit>.Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync(request.Activity.Id);

                mapper.Map(request.Activity, activity);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}